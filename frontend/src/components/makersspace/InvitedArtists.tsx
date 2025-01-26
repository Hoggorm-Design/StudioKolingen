import useInvitedArtists from "../../hooks/useInvitedArtists.ts";

const InvitedArtists = () => {
  const { invitedArtists, loading } = useInvitedArtists();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!invitedArtists) {
    return <div>No Invited artists!</div>;
  }

  return (
    <article className="flex flex-col">
      <p className="font-extrabold pb-2">Invited Artists 2024</p>
      <ul>
        {invitedArtists.map((artist, index) => (
          <li key={index} className="flex flex-col">
            {artist.artistLink ? (
              <a
                href={artist.artistLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline pb-5 pt-5"
              >
                {artist.artistName}
              </a>
            ) : (
              <p className="text-lg pb-2 ">{artist.artistName}</p>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default InvitedArtists;
