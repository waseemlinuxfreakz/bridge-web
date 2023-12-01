import React, {useEffect, useState} from 'react';
import SwapTop from './SwapTop';
import RefreshExchange from './RefreshExchange';
import MainActionButton from './MainActionButton';
import TokenSelectors from './TokenSelectors/TokenSelectors'


function SwapContainer() {

    const [fromToken, setFromToken] = useState('ETH');
    const [toToken, setToToken] = useState('USDT');

    return ( 
        <div className="swapContainerBox">
            <SwapTop/>
            <TokenSelectors/>
            <RefreshExchange
                fromToken={fromToken}
                toToken={toToken}
            />
            <MainActionButton/>
        </div>
     );
}

export default SwapContainer;