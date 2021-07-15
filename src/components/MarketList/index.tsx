import React, { useState } from 'react';

import { Container } from './styles';

import Markets from './Markets/index'
import { FlatList } from 'react-native';

type MarketProps = {
  markets: any;
  nav: any;
}

const MarketList: React.FC<MarketProps> = ({ markets, nav }) => {
  const renderItem = ({ item }: any ) => (
    <Markets
      markets={item}
      navigation={nav}
    />
  );

  return (
    <Container>
      <FlatList
        data={markets}
        numColumns={4}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
    
  );
}

export default MarketList;