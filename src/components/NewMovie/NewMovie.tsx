import React, { useState } from 'react';
import classNames from 'classnames';
import './NewMovie.scss';

type Props = {
  addNewMovie: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ addNewMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');

  const [titleError, setTitleError] = useState(false);
  const [imgUrlError, setImgUrlError] = useState(false);
  const [imdbUrlError, setImdbUrlError] = useState(false);
  const [imdbIdError, setImdbIdError] = useState(false);

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');
  };

  const checkErrors = () => {
    setTitleError(!title);
    setImgUrlError(!imgUrl);
    setImdbUrlError(!imdbUrl);
    setImdbIdError(!imdbId);
  };

  const onAdd = (event: React.FormEvent) => {
    event.preventDefault();

    checkErrors();

    const newMovie = {
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    };

    if (title && imgUrl && imdbUrl && imdbId) {
      addNewMovie(newMovie);
      clearForm();
    }
  };

  return (
    <form
      className="form"
      onSubmit={onAdd}
    >
      <input
        className={classNames('form__input', { form__error: titleError })}
        type="text"
        placeholder="tittle"
        value={title}
        onChange={event => {
          setTitle(event.target.value);
          setTitleError(false);
        }}
      />
      <input
        className="form__input"
        type="text"
        placeholder="description"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <input
        className={classNames('form__input', { form__error: imgUrlError })}
        type="text"
        placeholder="imgUrl"
        value={imgUrl}
        onChange={event => {
          setImgUrl(event.target.value);
          setImdbIdError(false);
          setImgUrlError(false);
        }}
      />
      <input
        className={classNames('form__input', { form__error: imdbUrlError })}
        type="text"
        placeholder="imdbUrl"
        value={imdbUrl}
        onChange={event => {
          setImdbUrl(event.target.value);
          setImdbUrlError(false);
        }}
      />
      <input
        className={classNames('form__input', { form__error: imdbIdError })}
        type="text"
        placeholder="imdbId"
        value={imdbId}
        onChange={event => {
          setImdbId(event.target.value);
          setImdbIdError(false);
        }}
      />
      <button
        type="submit"
        className="form__add"
      >
        Add
      </button>
    </form>
  );
};
