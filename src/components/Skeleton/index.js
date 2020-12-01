import React from 'react';
import {StatusBar, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {ContainerSkeleton} from './styles';

function Skeleton() {
  return (
    <ContainerSkeleton>
      <StatusBar barStyle="dark-content" />
      <SkeletonPlaceholder>
        <View
          style={{
            marginBottom: 6,
            width: 300,
            height: 200,
          }}
        />
        <View
          style={{
            marginBottom: 6,
            width: 300,
            height: 200,
          }}
        />
        <View
          style={{
            width: 300,
            height: 200,
          }}
        />
      </SkeletonPlaceholder>
    </ContainerSkeleton>
  );
}

export default Skeleton;
