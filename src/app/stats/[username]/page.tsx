// import { ContributionGraph } from "@/components/contribution-graph";
import { StatsCard } from "@/components/stats-card";
import { UserHeader } from "@/components/user-header";
import { notFound } from "next/navigation";
import Share from "./share";

export const dynamicParams = true 

export const revalidate = 60

async function getGitHubStats(username: string) {
  console.log(username)
  try {
    console.log(process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN)
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    if (!response.ok) return null;
    const userData = await response.json();

    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    const reposData = await reposResponse.json();
    console.log(reposData)

    return {
      avatar_url: userData.avatar_url,
      name: userData.name || username,
      languages: reposData.reduce((acc: Record<string, number>, repo: any) => {
        if (repo.language) {
          acc[repo.language] = (acc[repo.language] || 0) + 1;
        }
        return acc;
      }, {}),
      public_repos: userData.public_repos,
      followers: userData.followers,
      created_at: userData.created_at,
    };
  } catch (error) {
    return null;
  }
}

export default async function StatsPage({ params }: { params: { username: string } }) {
  

  if (!params) return notFound();

  const username = await params.username;
  console.log(username)
  const stats = await getGitHubStats(username);
  if (!stats) return notFound();

  // Get top 3 languages
  const sortedLanguages = Object.entries(stats.languages)
    .sort(([, a]: any, [, b]: any) => b - a)
    .slice(0, 3);

  const relationships = {
    "True Love": sortedLanguages[0]?.[0] || "Still Searching",
    "Current Flame": sortedLanguages[1]?.[0] || "Single",
    "Past Romance": sortedLanguages[2]?.[0] || "No History",
  };


  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}${`/stats/${username}`}`
      );
     
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <UserHeader
          username={username}
          avatarUrl={stats.avatar_url}
          name={stats.name}
        />
        {/* <ContributionGraph /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StatsCard
            title="Code Relationships ❤️"
            value={relationships["True Love"]}
            description="Your True Love"
            className="bg-pink-500/70"
          />
          <StatsCard
            title="Current Flame 🔥"
            value={relationships["Current Flame"]}
            description="Your Active Romance"
            className="bg-purple-500/70"
          />
          <StatsCard
            title="Body Count 🥵"
            value={stats.public_repos.toString()}
            description="Your External Affairs"
            className="bg-blue-500/70"
          />
          <StatsCard
            title="Forking Since 🥰"
            value={new Date(stats.created_at).getFullYear().toString()}
            description="Your Forking Journey Began"
            className="bg-green-500/70"
          />
        </div>
          <Share username={username} />
      </div>
    </main>
  );
}
