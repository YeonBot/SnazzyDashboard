import React from 'react';
import { connect } from 'react-redux';
import { returntypeof } from 'react-redux-typescript';

import Favorite from '../../../components/Preference/Favorite';
import { setFavoriteItem, deleteFavoriteItem } from '../../../modules/favorite';

import { RootState } from '../../../modules';

const mapStateToProps = (state: RootState) => ({
  list: state.favorite.list,
});
const mapDispatchToProps = (dispatch: any) => ({
  dispatchSetFavoriteItem: (favoriteItem: string) => dispatch(setFavoriteItem(favoriteItem)),
  dispatchDeleteFavoriteItem: (favoriteItem: string) => dispatch(deleteFavoriteItem(favoriteItem)),
});
const statePropTypes = returntypeof(mapStateToProps);
const actionPropTypes = returntypeof(mapDispatchToProps);

type Props = typeof statePropTypes & typeof actionPropTypes

class PreferenceFavorite extends React.PureComponent<Props> {
  render() {
    const { list, dispatchSetFavoriteItem, dispatchDeleteFavoriteItem } = this.props;

    return (
      <Favorite
        list={list}
        setFavoriteItem={dispatchSetFavoriteItem}
        deleteFavoriteItem={dispatchDeleteFavoriteItem}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PreferenceFavorite);
