import Link from "next/link";
import { notFound } from "next/navigation";
import { toBanglaNumber } from "@/lib/toBanglaNumber";
import { IProduct } from "@/type";
import PriceCard from "@/components/Product/PriceCard";
import { formatPrice, getUnit } from "@/lib/utils";

async function getProduct(productId: string): Promise<IProduct | null> {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${productId}`,
  );
  const data: IProduct = await response.json();
  return data;
}

function ChangeBadge({ product }: { product: IProduct }) {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  const styles = isUp
    ? "bg-error text-white"
    : isDown
      ? "bg-success text-white"
      : "bg-gray-100 text-gray-600";

  const arrow = isUp ? "▲" : isDown ? "▼" : "—";

  return (
    <div
      className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles}`}
    >
      {arrow} {toBanglaNumber(Number(product.change.pct.toFixed(1)))}%
    </div>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  let product: IProduct | null;

  try {
    product = await getProduct(productId);
  } catch {
    return (
      <main className="min-h-screen bg-base-200 px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">
          <div className="text-4xl">⚠️</div>
          <h1 className="mt-4 text-xl font-bold text-gray-900">
            পণ্যের তথ্য লোড করা যায়নি
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            ইন্টারনেট সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-success px-5 py-3 text-sm font-semibold text-white transition"
          >
            হোমে ফিরে যান
          </Link>
        </div>
      </main>
    );
  }

  if (!product) {
    notFound();
  }

  const marketPrices = product.markets.flatMap((market) => [
    market.min,
    market.max,
  ]);

  const minPrice =
    marketPrices.length > 0 ? Math.min(...marketPrices) : product.today;

  const maxPrice =
    marketPrices.length > 0 ? Math.max(...marketPrices) : product.today;

  const averagePrice =
    product.markets.length > 0
      ? Math.round(
          product.markets.reduce(
            (sum, market) => sum + (market.min + market.max) / 2,
            0,
          ) / product.markets.length,
        )
      : product.today;

  const isUp = product.change.dir === "up";

  return (
    <main className="min-h-screen bg-base-200 px-4 py-6 text-gray-900 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500"
        >
          <Link href="/" className="transition hover:text-emerald-700">
            হোম
          </Link>
          <span>/</span>
          <Link
            href={`/category/${product.category}`}
            className="transition hover:text-emerald-700"
          >
            {product.categoryNameBn}
          </Link>
          <span>/</span>
          <span className="font-medium text-base-content">
            {product.nameBn}
          </span>
        </nav>

        <section className="rounded-2xl border border-primary-2/10 bg-white/90 p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-4">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-base-200 text-3xl sm:size-20 sm:text-4xl">
                {product.image || product.categoryIcon || "🛒"}
              </div>

              <div className="min-w-0">
                <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
                  {product.nameBn}
                </h1>

                <p className="mt-1 text-sm text-base-content">
                  {product.categoryNameBn} · {getUnit(product.unit)}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                    {product.categoryIcon} {product.categoryNameBn}
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {getUnit(product.unit)}
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {toBanglaNumber(product.markets.length)}টি বাজার
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-600">
                  আজকের গড় দাম {formatPrice(product.today)}
                  {" · "}
                  গতকালের তুলনায়{" "}
                  <span
                    className={
                      isUp
                        ? "font-semibold text-red-600"
                        : product.change.dir === "down"
                          ? "font-semibold text-emerald-700"
                          : "font-semibold text-gray-600"
                    }
                  >
                    {isUp
                      ? "বেড়েছে"
                      : product.change.dir === "down"
                        ? "কমেছে"
                        : "অপরিবর্তিত"}
                    {product.change.dir !== "flat" &&
                      ` ${toBanglaNumber(Number(product.change.pct))}%`}
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full shrink-0 rounded-2xl bg-base-200 p-5 sm:w-44 sm:text-center">
              <p className="text-sm text-gray-500">আজকের দাম</p>
              <p className="mt-1 text-3xl font-bold text-gray-900">
                {toBanglaNumber(product.today)}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                টাকা / {getUnit(product.unit).replace("প্রতি ", "")}
              </p>
              <div className="sm:flex sm:justify-center">
                <ChangeBadge product={product} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-primary-2/10 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-lg font-bold text-black">দামের সারসংক্ষেপ</h2>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <PriceCard title="সর্বনিম্ন দাম" value={minPrice} color="green" />
            <PriceCard title="সর্বোচ্চ দাম" value={maxPrice} color="red" />
            <PriceCard title="গড় দাম" value={averagePrice} color="default" />
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-primary-2/10 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                বাজারভিত্তিক আজকের দাম
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                বিভিন্ন বাজারে {product.nameBn}-এর মূল্যতালিকা
              </p>
            </div>

            <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              {toBanglaNumber(product.markets.length)}টি বাজার পাওয়া গেছে
            </span>
          </div>

          {product.markets.length === 0 ? (
            <div className="mt-5 rounded-xl border border-dashed border-gray-300 py-12 text-center">
              <p className="text-3xl">🏪</p>
              <p className="mt-3 font-medium text-base-content">
                কোনো বাজারের তথ্য পাওয়া যায়নি
              </p>
              <p className="mt-1 text-sm text-gray-500">
                পরে আবার চেষ্টা করুন।
              </p>
            </div>
          ) : (
            <div className="mt-5 overflow-hidden rounded-xl border border-primary-2/10">
              <div className="overflow-x-auto">
                <table className="w-full min-w-155 border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-base-200 text-xs font-semibold text-gray-500">
                      <th scope="col" className="px-4 py-4">
                        বাজার
                      </th>
                      <th scope="col" className="px-4 py-4">
                        বিভাগ
                      </th>
                      <th scope="col" className="px-4 py-4 text-right">
                        সর্বনিম্ন
                      </th>
                      <th scope="col" className="px-4 py-4 text-right">
                        সর্বোচ্চ
                      </th>
                      <th scope="col" className="px-4 py-4 text-right">
                        গড়
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {product.markets.map((market, index) => {
                      const marketAverage = Math.round(
                        (market.min + market.max) / 2,
                      );

                      return (
                        <tr
                          key={`${market.market}-${market.division}-${index}`}
                          className={`border-t border-primary-2/10 transition hover:bg-emerald-50/70 ${
                            index % 2 === 0 ? "bg-white" : "bg-base-200"
                          }`}
                        >
                          <td className="px-4 py-4 font-medium text-base-content">
                            {market.market}
                          </td>

                          <td className="px-4 py-4 text-gray-600">
                            {market.division}
                          </td>

                          <td className="whitespace-nowrap px-4 py-4 text-right text-success">
                            {formatPrice(market.min)}
                          </td>

                          <td className="whitespace-nowrap px-4 py-4 text-right text-error">
                            {formatPrice(market.max)}
                          </td>

                          <td className="whitespace-nowrap px-4 py-4 text-right font-semibold text-gray-900">
                            {formatPrice(marketAverage)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>

        <section className="mt-6 rounded-2xl border border-primary-2/10 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-lg font-bold text-gray-900">আগের দামের তুলনা</h2>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "আজ", price: product.today },
              { label: "গতকাল", price: product.yesterday },
              { label: "গত সপ্তাহ", price: product.lastWeek },
              { label: "গত মাস", price: product.lastMonth },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-gray-100 bg-base-200 p-4"
              >
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="mt-2 text-xl font-bold text-gray-900">
                  {toBanglaNumber(item.price)}
                  <span className="ml-1 text-xs font-normal text-gray-500">
                    টাকা
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
