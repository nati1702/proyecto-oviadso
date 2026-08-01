import TableFeeding from "@/components/feeding/tableFeeding";

export default function FeedingPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tabla de Alimentación</h1>

      <TableFeeding />
    </div>
  );
}