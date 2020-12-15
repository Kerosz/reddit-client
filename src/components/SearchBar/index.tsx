import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import searchStyles, { StyleProps } from './searchBar.styles';

const SearchBar: React.FC<StyleProps> = ({ classes }) => {
  const [term, setTerm] = React.useState<string>('');

  const handleSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(target.value);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchRoundedIcon />
      </div>
      <InputBase
        type="text"
        value={term}
        onChange={handleSearch}
        placeholder="Search"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'Search bar' }}
      />
    </div>
  );
};

export default withStyles(searchStyles)(SearchBar);
