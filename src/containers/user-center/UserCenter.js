import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import ListItem from 'react-native-elements/src/list/ListItem';
import List from 'react-native-elements/src/list/List';
import { ScrollView } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Share from 'react-native-share';
import * as StoreReview from 'react-native-store-review';


class UserCenter extends Component {
  static componentName = 'UserCenter';

  static shareToFriend() {
    const option = {
      title: 'Growth：带你成为顶尖开发者',
      message: '我现在使用Growth，这是一款专注于Web开发者成长的应用，涵盖Web开发的流程及技术栈，Web开发的学习路线、成长衡量等各方面。快来下载吧!',
      url: 'http://growth.ren/',
    };
    Share.open(option);
  }

  static ratingApp() {
    if (StoreReview.isAvailable) {
      StoreReview.requestReview();
    }
  }

  constructor(render) {
    super(render);
    this.state = {
      version: DeviceInfo.getVersion(),
    };
    UserCenter.shareToFriend = UserCenter.shareToFriend.bind(this);
  }

  render = () => (
    <ScrollView>
      <List>
        <ListItem
          title={'我的书签'}
          leftIcon={{ name: 'bookmark' }}
        />
        <ListItem
          title={'我的技能分布'}
          leftIcon={{ name: 'trending-up' }}
        />
      </List>
      <List>
        <ListItem
          title={'关于'}
          leftIcon={{ name: 'info' }}
          onPress={Actions.aboutUs}
        />
        <ListItem
          title={'分享给好友'}
          leftIcon={{ name: 'group-work' }}
          onPress={() => UserCenter.shareToFriend()}
        />
        <ListItem
          title={'觉得不错，给个好评'}
          onPress={() => UserCenter.ratingApp()}
          leftIcon={{ name: 'thumb-up' }}
        />
        <ListItem
          title={'发现Bug'}
          leftIcon={{ name: 'bug-report' }}
        />
        <ListItem
          title={'功能反馈'}
          leftIcon={{ name: 'feedback' }}
        />
      </List>
      <List>
        <ListItem
          hideChevron
          title={'微信公众号'}
          leftIcon={{ name: 'code' }}
          subtitle={'phodal-weixin'}
        />
        <ListItem
          title={'支持开发'}
          leftIcon={{ name: 'work' }}
        />
        <ListItem
          hideChevron
          title={'当前版本'}
          rightTitle={this.state.version}
        />
      </List>
    </ScrollView>
  );
}

export default UserCenter;
