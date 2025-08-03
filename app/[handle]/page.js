import clientPromise from "@/lib/mongodb";
import { FaLink, FaSearch } from 'react-icons/fa';
import Link from "next/link";
import ProfileImage from "@/components/ProfileImage";

export default async function Page({ params }) {
    const { handle } = await params;
    let user = null;

    try {
        const client = await clientPromise;
        const db = client.db("linkly");
        const collection = db.collection("links");
        user = await collection.findOne({ handle });
    } catch (e) {
        console.error("Error fetching user:", e);
    }

    return (
        <main className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-violet-500 to-purple-600">
            <div className="container mx-auto px-4 py-8 sm:py-12">
                <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
                    {/* Profile Header */}
                    <div className="p-6 sm:p-8 text-center">
                        <ProfileImage
                            src={user?.pic}
                            alt={`@${handle}'s profile`}
                            handle={handle}
                            size={user ? 'md' : 'lg'}
                        />
                        <h1 className="text-2xl sm:text-3xl font-bold text-violet-900 mt-4">
                            {user ? `@${handle}` : 'Not Found'}
                        </h1>

                        {!user && (
                            <p className="text-violet-700 mt-2">
                                This Linkly profile doesn't exist yet.
                            </p>
                        )}
                    </div>

                    {/* Links Section */}
                    <div className="px-6 pb-8 sm:px-8">
                        {user ? (
                            <div className="space-y-4">
                                {user.links && user.links.length > 0 ? (
                                    user.links.map((link, idx) => {
                                        let url = link.link;
                                        if (!/^https?:\/\//i.test(url)) {
                                            url = 'https://' + url;
                                        }
                                        return (
                                            <Link
                                                key={idx}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative flex items-center gap-3 bg-white/90 hover:bg-white border border-violet-100 rounded-xl p-4 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                                            >
                                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center text-violet-700">
                                                    <FaLink className="w-4 h-4" />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-sm font-medium text-violet-700 truncate">
                                                        {link.linktext || 'Visit Link'}
                                                    </p>
                                                    <p className="text-xs text-violet-400 truncate">
                                                        {url.replace(/^https?:\/\//, '')}
                                                    </p>
                                                </div>
                                                <div className="text-violet-300 group-hover:text-violet-500 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        );
                                    })
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="mx-auto w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center text-violet-400 mb-3">
                                            <FaLink className="w-6 h-6" />
                                        </div>
                                        <p className="text-violet-600 font-medium">No links added yet</p>
                                        <p className="text-violet-400 text-sm mt-1">Check back later for updates</p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <div className="mx-auto w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 mb-4">
                                    <FaSearch className="w-8 h-8" />
                                </div>
                                <p className="text-violet-800 font-medium">Profile not found</p>
                                <p className="text-violet-600 mt-1">
                                    The handle <span className="font-semibold">@{handle}</span> doesn't exist yet.
                                </p>
                                <Link
                                    href="/"
                                    className="inline-block mt-6 px-6 py-2.5 bg-amber-300 hover:bg-amber-400 text-violet-900 font-medium rounded-lg transition-colors duration-200"
                                >
                                    Create Your Own Linkly
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-violet-100 bg-white/50 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center text-sm text-violet-600 hover:text-violet-900 font-medium transition-colors"
                        >
                            <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            Back to Linkly
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}