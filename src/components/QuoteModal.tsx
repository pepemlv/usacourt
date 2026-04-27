import { FormEvent, useState } from 'react';
import { Upload, X } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../lib/firebase';

type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const initialForm = {
  name: '',
  email: '',
  phone: '',
  siteAddress: '',
  message: '',
};

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [form, setForm] = useState(initialForm);
  const [photos, setPhotos] = useState<File[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const photoUrls = await Promise.all(
        photos.map(async (photo) => {
          const cleanName = photo.name.replace(/[^a-zA-Z0-9._-]/g, '-');
          const photoRef = ref(storage, `quote-photos/${Date.now()}-${cleanName}`);
          await uploadBytes(photoRef, photo);
          return getDownloadURL(photoRef);
        })
      );

      await addDoc(collection(db, 'quoteRequests'), {
        ...form,
        photoUrls,
        status: 'new',
        createdAt: serverTimestamp(),
      });

      setForm(initialForm);
      setPhotos([]);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6">
      <div className="max-h-full w-full max-w-2xl overflow-y-auto rounded-lg bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h2 className="text-xl font-bold text-gray-900">Request a Quote</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            aria-label="Close quote form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-5">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm font-semibold text-gray-700">
              Name
              <input
                required
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                className="mt-2 w-full rounded border border-gray-300 px-3 py-3 text-gray-900 outline-none transition focus:border-[#0A3161] focus:ring-2 focus:ring-[#0A3161]/20"
              />
            </label>

            <label className="block text-sm font-semibold text-gray-700">
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                className="mt-2 w-full rounded border border-gray-300 px-3 py-3 text-gray-900 outline-none transition focus:border-[#0A3161] focus:ring-2 focus:ring-[#0A3161]/20"
              />
            </label>

            <label className="block text-sm font-semibold text-gray-700">
              Phone
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                className="mt-2 w-full rounded border border-gray-300 px-3 py-3 text-gray-900 outline-none transition focus:border-[#0A3161] focus:ring-2 focus:ring-[#0A3161]/20"
              />
            </label>

            <label className="block text-sm font-semibold text-gray-700">
              Site Address
              <input
                required
                value={form.siteAddress}
                onChange={(event) => updateField('siteAddress', event.target.value)}
                className="mt-2 w-full rounded border border-gray-300 px-3 py-3 text-gray-900 outline-none transition focus:border-[#0A3161] focus:ring-2 focus:ring-[#0A3161]/20"
              />
            </label>
          </div>

          <label className="block text-sm font-semibold text-gray-700">
            Optional Upload Photos
            <span className="mt-2 flex cursor-pointer items-center justify-center gap-3 rounded border border-dashed border-gray-300 px-4 py-5 text-center text-sm text-gray-600 transition hover:border-[#0A3161] hover:bg-[#0A3161]/5">
              <Upload className="h-5 w-5" />
              {photos.length > 0 ? `${photos.length} photo${photos.length === 1 ? '' : 's'} selected` : 'Choose site photos'}
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(event) => setPhotos(Array.from(event.target.files ?? []))}
                className="sr-only"
              />
            </span>
          </label>

          <label className="block text-sm font-semibold text-gray-700">
            Message
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
              className="mt-2 w-full resize-none rounded border border-gray-300 px-3 py-3 text-gray-900 outline-none transition focus:border-[#0A3161] focus:ring-2 focus:ring-[#0A3161]/20"
            />
          </label>

          {status === 'success' && (
            <p className="rounded bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              Your quote request was sent.
            </p>
          )}

          {status === 'error' && (
            <p className="rounded bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded bg-[#B31942] px-6 py-4 text-base font-bold text-white transition hover:bg-[#8B1538] disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {status === 'sending' ? 'Sending...' : 'Send Quote Request'}
          </button>
        </form>
      </div>
    </div>
  );
}
