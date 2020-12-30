/* eslint-disable consistent-return */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { withStyles, CircularProgress, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
// import debounce from 'lodash/debounce';
import searchStyles, { StyleProps } from './searchBar.styles';
import API from '../../lib/API';
import { fd } from '../../helpers';

interface TSearchData {
  display_name: string;
  subscribers: string;
}
interface ISearch {
  before: string | null;
  after: string | null;
  search: TSearchData[];
}

const initialState = {
  before: null,
  after: null,
  search: [],
};

// TODO: Potentially add state logic on the redux store, still TBD
const SearchBar: React.FC<StyleProps> = ({ classes }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<ISearch>(initialState);
  const [term, setTerm] = React.useState<string>('');
  const isLoading = open && options.search.length === 0;

  const history = useHistory();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    if (event.key === 'Enter') {
      event.preventDefault();

      history.push(`/subreddit/${target.value}`);
    }
  };

  React.useEffect(() => {
    const loadSearchData = async () => {
      const res = await API.getSearchResults({
        q: term,
        type: 'sr',
      });

      setOptions(res);
    };

    if (term.length > 3) {
      // TODO: debounce doesn't work for some reason, still investigating
      const load = setTimeout(() => loadSearchData(), 1000);

      return () => clearTimeout(load);
    }
  }, [term]);

  return (
    <Autocomplete
      className={classes.search}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      options={options.search}
      getOptionLabel={(option) => option.display_name}
      getOptionSelected={(option, value) =>
        option.display_name === value.display_name
      }
      loading={isLoading}
      loadingText="Searching, hang on..."
      noOptionsText="We found nothing :("
      renderInput={(args) => (
        <TextField
          {...args}
          value={term}
          aria-label="Search field"
          onChange={({ target }) => setTerm(target.value)}
          placeholder="Search..."
          variant="outlined"
          margin="normal"
          size="small"
          InputProps={{
            ...args.InputProps,
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {args.InputProps.endAdornment}
              </>
            ),
            onKeyDown: handleKeyPress,
          }}
        />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.display_name, inputValue);
        const parts = parse(option.display_name, matches);
        let formatedSubs = null;
        if (option.subscribers) {
          formatedSubs = fd.addNumberSeparator(option.subscribers);
        }

        return (
          <Link
            className={classes.listSearch}
            to={`/subreddit/${option.display_name}`}
          >
            {parts.map(
              (
                part: { highlight: any; text: React.ReactNode },
                index: number,
              ) => (
                <span
                  key={index}
                  style={{ fontWeight: part.highlight ? 700 : 400 }}
                >
                  {part.text}
                </span>
              ),
            )}
            <p>{formatedSubs} members</p>
          </Link>
        );
      }}
      freeSolo
      autoSelect
      autoComplete
      autoHighlight
      handleHomeEndKeys
      clearOnEscape
      clearOnBlur
      openOnFocus
    />
  );
};

export default withStyles(searchStyles)(SearchBar);
