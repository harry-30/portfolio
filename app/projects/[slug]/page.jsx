import { notFound } from 'next/navigation';
import OwOLL from './owoll';
import PseudoPitch from './pseudo';
import Sayyara from './sayyara'

export default async function ProjectPage({ params }) {
    const { slug } = await params;

    if (slug === 'owoll') {
        return <OwOLL />
    } else if (slug === 'pseudo') {
        return <PseudoPitch />
    } else if (slug === 'sayyara') {
        return <Sayyara />
    } else {
        return notFound()
    }

    return <OwOLL />;
}
