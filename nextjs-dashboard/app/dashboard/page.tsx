import { fetchLatestInvoices, fetchRevenue } from "../lib/data";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import { Suspense } from "react";
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from "../ui/skeletons";

export default async function Page() {

    return (
        <main>
            <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"></div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart/>
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>

        </main>
    ) 
}
