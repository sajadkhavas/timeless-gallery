import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    throw redirect({ to: "/shop/$slug", params: { slug: params.slug }, replace: true });
  },
});
