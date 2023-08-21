import { redirect } from 'next/navigation';
import { RedirectType } from 'next/dist/client/components/redirect';

export default function Home() {
  return redirect('/home', RedirectType.replace);
}