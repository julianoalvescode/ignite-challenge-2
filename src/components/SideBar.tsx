import { Button } from "./Button";

import { GenreResponseProps } from "./../domain/models";

interface SidebarProps {
  handleClickButton: (id: number) => void;
  genres: GenreResponseProps[];
  selectedGenreId: number;
}

export function SideBar({
  handleClickButton,
  genres,
  selectedGenreId,
}: SidebarProps) {
  return (
    <>
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <div className="buttons-container">
          {genres?.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
      ;
    </>
  );
}
