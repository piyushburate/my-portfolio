interface AssetEmbedProps {
  url: string;
  width?: string;
  height?: string;
}

const AssetEmbed: React.FC<AssetEmbedProps> = ({
  url,
  width = "100%",
  height = "1110px",
}) => {
  return (
    <iframe
      src={url}
      title="Resume PDF"
      width={width}
      height={height + 50}
      className="rounded-md overflow-clip border w-auto h-auto"
      style={{
        aspectRatio: parseInt(width) / parseInt(height + 50),
      }}
    >
      This browser does not support embedding Google Docs. Please use a
      compatible browser.
    </iframe>
  );
};

export default AssetEmbed;
