# Instalog

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the index page.

## Design

Check project design on [Figma](https://www.figma.com/file/rygmKpkjsqVW4sB503TOOl/Activity-Log?node-id=0%3A1)
## [API routes](https://nextjs.org/docs/api-routes/introduction)

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project contains one API route only that can be accessed on [http://localhost:3000/api/events](http://localhost:3000/api/events). This endpoint can be edited in `pages/api/events.ts`.

#### Available HTTP requests
`/api/events` is equipped to handle 2 request methods:

1. `GET` to list all available events or filter some of them based on _actor_id, target_id, action_id and/or name_ fields.

    Ex. of request url params: [http://localhost:3000/api/events?page=1&q=ASON](http://localhost:3000/api/events?page=1&q=ASON)

    _q_ param will be compared against all actor_id, target_id, action_id and/or name fields in Event db table.

2. `POST` to create a new event

    Ex. of request body object:

    ```json
      {
        "actorId": "user_L7C875257B4",
        "actorName": "Ayman Baz",
        "actionId": "evt_action_6ALC8HA1073J",
        "actionName": "added_incident_log",
        "targetId": "user_DOKVD1U3L030",
        "targetName": "ayman@instatus.com",
        "location": "105.40.62.95",
        "metadataRedirect": "/setup",
        "metadataDescription": "Incident log created"
      }
    ```
## Used Stack


- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API. Next.js is a [React](https://reactjs.org/docs/getting-started.html) framework.
- [TailwindCSS Docs](https://tailwindcss.com/docs/installation) - learn about tailwind css framework.
- [Heroku Postgres](https://devcenter.heroku.com/articles/heroku-postgresql) - learn more about the no-boilerplate DB server.
- [Prisma Documentation](https://www.prisma.io/docs/getting-started) - get to know Prisma, the next generation ORM.
- ##### Deployed on Vercel

    This Next.js app is deployed on the [Netlify Platform](https://docs.netlify.com/get-started/). Visit it here [https://instalog-seifme.netlify.app/](https://instalog-seifme.netlify.app/)

    Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
