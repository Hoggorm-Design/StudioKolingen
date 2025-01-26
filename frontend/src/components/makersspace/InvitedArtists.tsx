import { InvitedArtist } from "../../interfaces/invitedArtist.ts";

interface InvitedArtistsProps {
  invitedArtists: InvitedArtist[];
}
const InvitedArtists = ({ invitedArtists }: InvitedArtistsProps) => {
  return (
    <>
      <article className="flex flex-col">
        <p className="font-extrabold">Invited Artists 2024</p>
        <ul>
          {invitedArtists.map((artist, index) => (
            <li key={index} className="flex flex-col">
              {artist.artistLink ? (
                <a
                  href={artist.artistLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {artist.artistName}
                </a>
              ) : (
                <p className="text-lg">{artist.artistName}</p>
              )}
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default InvitedArtists;
