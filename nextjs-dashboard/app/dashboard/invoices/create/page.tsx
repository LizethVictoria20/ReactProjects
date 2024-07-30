import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/create-form';
import { fetchCustomers } from '@/app/lib/data';

export default async function CreateInvoicePage() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {label: 'Invoice', href: '/dashboard/invoice'},
          {
            label: 'Create Invoice', 
            href: '/dashboard/invoice/create', 
            active: true}
        ]}
      />
      <Form customers={customers} />
    </main>
  )
}