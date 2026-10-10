
import { Skeleton } from "@/components/ui/skeleton";

const ProductPageSkeleton = () => {
  return (
    <main className="min-h-screen bg-base-200 px-4 py-6 text-gray-900 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm">
          <Skeleton className="h-4 w-10" />
          <span>/</span>
          <Skeleton className="h-4 w-20" />
          <span>/</span>
          <Skeleton className="h-4 w-28" />
        </nav>

        <section className="rounded-2xl border border-primary-2/10 bg-white/90 p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-4">
              <Skeleton className="size-16 shrink-0 rounded-2xl sm:size-20" />

              <div className="min-w-0 flex-1">
                <Skeleton className="h-8 w-48 max-w-full sm:h-9 sm:w-64" />

                <Skeleton className="mt-2 h-4 w-36" />

                <div className="mt-3 flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                </div>

                <div className="mt-3 flex flex-col gap-2">
                  <Skeleton className="h-4 w-full max-w-md" />
                  <Skeleton className="h-4 w-48 max-w-full" />
                </div>
              </div>
            </div>

            <div className="w-full shrink-0 rounded-2xl bg-base-200 p-5 sm:w-44 sm:text-center">
              <Skeleton className="mx-auto h-4 w-20" />
              <Skeleton className="mx-auto mt-2 h-9 w-28" />
              <Skeleton className="mx-auto mt-2 h-4 w-24" />

              <div className="mt-3 flex justify-center">
                <Skeleton className="h-7 w-20 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-primary-2/10 bg-white p-5 shadow-sm sm:p-7">
          <Skeleton className="h-6 w-36" />

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl bg-base-200 p-4"
              >
                <Skeleton className="h-4 w-24" />
                <Skeleton className="mt-3 h-8 w-28" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-primary-2/10 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Skeleton className="h-6 w-48" />
              <Skeleton className="mt-2 h-4 w-64 max-w-full" />
            </div>

            <Skeleton className="h-6 w-36 rounded-full" />
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-primary-2/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-155 border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-base-200">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <th
                        key={index}
                        className={`px-4 py-4 ${
                          index >= 2 ? "text-right" : ""
                        }`}
                      >
                        <Skeleton
                          className={`h-4 ${
                            index === 0
                              ? "w-12"
                              : index === 1
                                ? "w-12"
                                : "ml-auto w-14"
                          }`}
                        />
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {Array.from({ length: 5 }).map((_, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`border-t border-primary-2/10 ${
                        rowIndex % 2 === 0 ? "bg-white" : "bg-base-200"
                      }`}
                    >
                      {Array.from({ length: 5 }).map((_, colIndex) => (
                        <td
                          key={colIndex}
                          className={`px-4 py-4 ${
                            colIndex >= 2 ? "text-right" : ""
                          }`}
                        >
                          <Skeleton
                            className={`h-4 ${
                              colIndex === 0
                                ? "w-24"
                                : colIndex === 1
                                  ? "w-20"
                                  : "ml-auto w-14"
                            }`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-primary-2/10 bg-white p-5 shadow-sm sm:p-7">
          <Skeleton className="h-6 w-40" />

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-100 bg-base-200 p-4"
              >
                <Skeleton className="h-4 w-16" />
                <Skeleton className="mt-3 h-7 w-24 max-w-full" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductPageSkeleton;
