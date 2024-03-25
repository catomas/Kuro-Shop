export const revalidate = 0;

import { getPaginatedUsers } from "@/actions";
import { UsersTable } from "./ui/UsersTable";
import { Pagination, Title } from "@/components";

interface CategoryPageProps {
  searchParams: {
    page: string;
  };
}

export default async function UsersPage({ searchParams }: CategoryPageProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { ok, users = [], totalPages = 1 } = await getPaginatedUsers({ page });

  return (
    <>
      <Title title="Mantenimiento de usuarios" />

      <div className="mb-10">
        <UsersTable users={users} />

        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
