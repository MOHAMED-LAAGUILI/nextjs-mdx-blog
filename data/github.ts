export interface GithubUser {
   login: string;
   name: string | null;
   avatar_url: string;
   bio: string | null;
   location: string | null;
   blog: string | null;
   twitter_username: string | null;
   company: string | null;
   public_repos: number;
   followers: number;
   following: number;
   html_url: string;
}

export async function getGithubUser(username: string): Promise<GithubUser> {
   const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
         Accept: "application/vnd.github+json",
      },
      next: {
         revalidate: 3600,
      },
   });

   if (!res.ok) {
      throw new Error("Failed to fetch GitHub user.");
   }

   return res.json();
}
