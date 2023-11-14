import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleProp, ViewStyle} from 'react-native';
import {ItemBackgroundImage, ItemDescription, ItemSquare} from '../components';
import {HomeScreenNavProp} from '../navigation/types';
import {colors} from '../theme';

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavProp>();

  const onPressShowMore = () => {
    navigation.navigate('ItemScreen');
  };

  return (
    <ScrollView style={$container}>
      <ItemDescription
        title="Kilka słów o nas"
        subtitle="Czyli kim jesteśmy i dokąd zmierzamy"
        description="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? \n "
        buttonText="Zobacz więcej"
        onPress={onPressShowMore}
      />
      <ItemSquare />
      <ItemBackgroundImage
        title={'Pierwszy element\nDrugi element\nTrzeci element'}
        imageUrl="https://images.unsplash.com/photo-1699002159193-68fd17410f46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ItemDescription
        title="Kilka słów o nas"
        subtitle="Czyli kim jesteśmy i dokąd zmierzamy"
        description="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? \n "
        buttonText="Zobacz więcej"
        onPress={onPressShowMore}
      />
    </ScrollView>
  );
};

const $container: StyleProp<ViewStyle> = {
  flex: 1,
  backgroundColor: colors.background,
};
