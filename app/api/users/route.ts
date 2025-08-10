import { User } from "@/app/users/page";

export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'
        //, { cache: `no-store`}
    );
    const users: User[] = await res.json();
    return new Response(JSON.stringify(users), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}