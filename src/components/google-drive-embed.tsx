interface GoogleDriveEmbedProps {
  id: string;
  width?: string;
  height?: string;
}

const GoogleDriveEmbed: React.FC<GoogleDriveEmbedProps> = ({
  id,
  width = "100%",
  height = "1110px",
}) => {
  return (
    <iframe
      src={`https://drive.google.com/file/d/${id}/preview`}
      title="Google Docs Viewer"
      width={width}
      height={height}
      className="rounded-md overflow-clip border"
    >
      This browser does not support embedding Google Docs. Please use a
      compatible browser.
    </iframe>
  );
};


export default GoogleDriveEmbed;
