import { User } from "@/app/users/page";

export async function GET(req: Request, context: any) {
    console.log('req', req);
    console.log('context', context);
    const { params } = context;
    const res = await fetch('https://jsonplaceholder.typicode.com/users'
        //, { cache: `no-store`}
    );
    const users: User[] = await res.json();
    const user = users.filter((user) => user.id.toString() === params.id);

    return new Response(JSON.stringify(user), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}