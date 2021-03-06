import React from 'react';
import { Linking, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import AppStyle from '../../../theme/styles';
import Label from '../../../components/Label';

const profileItemRenders = {
  github: value => (
    <ListItem
      key="github"
      title={`GitHub: @${value}`}
      rightIcon={{ name: 'github', type: 'font-awesome' }}
      onPress={() => Linking.openURL(`https://github.com/${value}`)}
    />
  ),
  weibo: value => (
    <ListItem
      key="weibo"
      title={`微博: @${value}`}
      rightIcon={{ name: 'weibo', type: 'font-awesome' }}
    />
  ),
  zhihu: value => (
    <ListItem
      key="zhihu"
      title={`知乎: @${value}`}
      rightIcon={{ name: 'quora', type: 'font-awesome' }}
    />
  ),
  blog: value => (
    <ListItem
      key="blog"
      title={`博客: ${value}`}
      rightIcon={{ name: 'rss', type: 'font-awesome' }}
      onPress={() => Linking.openURL(value)}
    />
  ),
};

const genProfileItems = (profile) => {
  const profileItemKeys = Object.keys(profileItemRenders);
  const availableItemKeys = profileItemKeys.filter(key => profile[key]);
  return availableItemKeys.map(key => profileItemRenders[key](profile[key]));
};

const ContributorProfile = props => (
  <ScrollView style={AppStyle.userCenterBasisStyle}>
    <Label text={props.contributor.duty} />
    <List>
      {genProfileItems(props.contributor.profile)}
    </List>
  </ScrollView>
);

ContributorProfile.propTypes = {
  // TODO: use flowtype?
  // eslint-disable-next-line
  contributor: React.PropTypes.object.isRequired,
};

export default ContributorProfile;
