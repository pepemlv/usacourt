import { FormEvent, useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../lib/firebase';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'redclay2026';

type QuoteRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  siteAddress: string;
  message: string;
  status: string;
  photoUrls: string[];
  createdAt?: Timestamp;
};

type WebsiteImages = {
  beforeImageUrl: string;
  afterImageUrl: string;
};

export default function AdminDashboard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('adminLoggedIn') === 'true');
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [websiteImages, setWebsiteImages] = useState<WebsiteImages>({
    beforeImageUrl: '/pictures/hardcore.png',
    afterImageUrl: '/pictures/usahero1.jpg',
  });
  const [beforeFile, setBeforeFile] = useState<File | null>(null);
  const [afterFile, setAfterFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [websiteMessage, setWebsiteMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSavingWebsite, setIsSavingWebsite] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) return;

    const loadQuotes = async () => {
      setIsLoading(true);
      setError('');

      try {
        const quoteQuery = query(collection(db, 'quoteRequests'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(quoteQuery);

        setQuotes(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<QuoteRequest, 'id'>),
          }))
        );
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : 'Could not load quotes.');
      } finally {
        setIsLoading(false);
      }
    };

    loadQuotes();
    loadWebsiteImages();
  }, [isLoggedIn]);

  const loadWebsiteImages = async () => {
    try {
      const settingsSnap = await getDoc(doc(db, 'websiteSettings', 'partnerOpportunity'));

      if (!settingsSnap.exists()) return;

      const data = settingsSnap.data();
      setWebsiteImages({
        beforeImageUrl: typeof data.beforeImageUrl === 'string' ? data.beforeImageUrl : '/pictures/hardcore.png',
        afterImageUrl: typeof data.afterImageUrl === 'string' ? data.afterImageUrl : '/pictures/usahero1.jpg',
      });
    } catch (loadError) {
      setWebsiteMessage(loadError instanceof Error ? loadError.message : 'Could not load website images.');
    }
  };

  const uploadWebsiteImage = async (file: File, imageType: 'before' | 'after') => {
    const cleanName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
    const imageRef = ref(storage, `website/partner-opportunity/${imageType}-${Date.now()}-${cleanName}`);
    await uploadBytes(imageRef, file);
    return getDownloadURL(imageRef);
  };

  const handleWebsiteUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSavingWebsite(true);
    setWebsiteMessage('');

    try {
      const beforeImageUrl = beforeFile
        ? await uploadWebsiteImage(beforeFile, 'before')
        : websiteImages.beforeImageUrl;
      const afterImageUrl = afterFile
        ? await uploadWebsiteImage(afterFile, 'after')
        : websiteImages.afterImageUrl;

      await setDoc(doc(db, 'websiteSettings', 'partnerOpportunity'), {
        beforeImageUrl,
        afterImageUrl,
        updatedAt: serverTimestamp(),
      });

      setWebsiteImages({ beforeImageUrl, afterImageUrl });
      setBeforeFile(null);
      setAfterFile(null);
      setWebsiteMessage('Website images updated.');
    } catch (saveError) {
      setWebsiteMessage(saveError instanceof Error ? saveError.message : 'Could not update website images.');
    } finally {
      setIsSavingWebsite(false);
    }
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem('adminLoggedIn', 'true');
      setIsLoggedIn(true);
      setError('');
      return;
    }

    setError('Wrong username or password.');
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setQuotes([]);
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-gray-100 px-4 py-28">
        <form onSubmit={handleLogin} className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-xl">
          <h1 className="mb-6 text-2xl font-bold text-gray-900">Admin Login</h1>

          <label className="mb-4 block text-sm font-semibold text-gray-700">
            Username
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="mt-2 w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#0A3161] focus:ring-2 focus:ring-[#0A3161]/20"
            />
          </label>

          <label className="mb-5 block text-sm font-semibold text-gray-700">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#0A3161] focus:ring-2 focus:ring-[#0A3161]/20"
            />
          </label>

          {error && <p className="mb-4 rounded bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}

          <button className="w-full rounded bg-[#0A3161] px-5 py-3 font-bold text-white transition hover:bg-[#08264b]">
            Login
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage website content and quote requests</p>
          </div>
          <button onClick={handleLogout} className="rounded border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50">
            Logout
          </button>
        </div>

        <section className="mb-8 rounded-lg bg-white p-5 shadow">
          <h2 className="mb-1 text-2xl font-bold text-gray-900">Update Website</h2>
          <p className="mb-5 text-gray-600">Update Partner Opportunity before and after images from Firebase Storage.</p>

          <form onSubmit={handleWebsiteUpdate} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-semibold text-gray-700">
                Before Image
                <img src={websiteImages.beforeImageUrl} alt="Current before" className="mt-3 h-44 w-full rounded object-cover" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => setBeforeFile(event.target.files?.[0] ?? null)}
                  className="mt-3 w-full rounded border border-gray-300 px-3 py-2"
                />
              </label>

              <label className="block text-sm font-semibold text-gray-700">
                After Image
                <img src={websiteImages.afterImageUrl} alt="Current after" className="mt-3 h-44 w-full rounded object-cover" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => setAfterFile(event.target.files?.[0] ?? null)}
                  className="mt-3 w-full rounded border border-gray-300 px-3 py-2"
                />
              </label>
            </div>

            {websiteMessage && (
              <p className="rounded bg-gray-100 px-4 py-3 text-sm font-medium text-gray-700">{websiteMessage}</p>
            )}

            <button
              disabled={isSavingWebsite || (!beforeFile && !afterFile)}
              className="rounded bg-[#0A3161] px-6 py-3 font-bold text-white transition hover:bg-[#08264b] disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {isSavingWebsite ? 'Saving...' : 'Save Website Images'}
            </button>
          </form>
        </section>

        <div className="mb-5">
          <h2 className="text-2xl font-bold text-gray-900">Quote Requests</h2>
          <p className="text-gray-600">{quotes.length} request{quotes.length === 1 ? '' : 's'}</p>
        </div>

        {isLoading && <p className="rounded bg-white p-5 text-gray-700 shadow">Loading quotes...</p>}
        {error && <p className="rounded bg-red-50 p-5 font-medium text-red-700 shadow">{error}</p>}

        {!isLoading && !error && quotes.length === 0 && (
          <p className="rounded bg-white p-5 text-gray-700 shadow">No quote requests yet.</p>
        )}

        <div className="grid gap-5">
          {quotes.map((quote) => (
            <article key={quote.id} className="rounded-lg bg-white p-5 shadow">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{quote.name}</h2>
                  <p className="text-sm text-gray-500">
                    {quote.createdAt?.toDate ? quote.createdAt.toDate().toLocaleString() : 'No date'}
                  </p>
                </div>
                <span className="w-fit rounded bg-[#B31942]/10 px-3 py-1 text-sm font-bold uppercase text-[#B31942]">
                  {quote.status || 'new'}
                </span>
              </div>

              <div className="grid gap-3 text-sm text-gray-700 md:grid-cols-3">
                <a href={`mailto:${quote.email}`} className="font-medium text-[#0A3161]">{quote.email}</a>
                <a href={`tel:${quote.phone}`} className="font-medium text-[#0A3161]">{quote.phone}</a>
                <p>{quote.siteAddress}</p>
              </div>

              <p className="mt-4 whitespace-pre-wrap text-gray-700">{quote.message}</p>

              {quote.photoUrls?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {quote.photoUrls.map((url, index) => (
                    <a key={url} href={url} target="_blank" rel="noreferrer" className="rounded bg-gray-100 px-3 py-2 text-sm font-semibold text-[#0A3161] hover:bg-gray-200">
                      Photo {index + 1}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
