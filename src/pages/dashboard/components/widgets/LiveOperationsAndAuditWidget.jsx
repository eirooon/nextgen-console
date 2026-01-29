import CardWidget from "../../../../components/CardWidget";
export default function LiveOperationsAndAuditWidget({
  title,
  description,
  data,
}) {
  return (
    <CardWidget title={title} description={description}>
      {data}
    </CardWidget>
  );
}
