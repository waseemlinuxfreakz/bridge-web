import React, { useState, useEffect, useRef } from 'react';
import chainsData from './Chain.json';
import { useNetwork, useSwitchNetwork } from 'wagmi'

import Ethereum from '../../assets/img/Ethereum.svg';
import DownArrow from '../../assets/img/down-white.svg';

import SwapContainerMenu from './SwapContainerMenu';
import chainData from './Chain.json';

const SwapTop = () => {

    const findChain = (chain) => {
        return chainsData.find(c => chain && chain.id === c.id);
    }

    const { chain } = useNetwork()
    const { switchNetwork } = useSwitchNetwork()

    const [selectedChain, setSelectedChain] = useState({
        icon: chain && findChain(chain) ? findChain(chain).icon : Ethereum,
        name: chain && findChain(chain) ? findChain(chain).name : 'Ethereum',
    });

    const [isListVisible, setListVisible] = useState(false);

    useEffect(() => {
        if (chain) {
            const selChain = chainData.find(c => chain.id === c.id);
            if (selChain) {
                setSelectedChain({ 
                    icon:selChain.icon,
                    name:selChain.name });
            }
        }
    }, [chain]);

    const handleChainClick = (icon, name, id) => {
        setSelectedChain({ icon, name });
        toggleVisibility();
        switchNetwork?.(id);
    };

    const toggleVisibility = () => {
        setListVisible(!isListVisible);
    };
	
	const selectCoinRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (selectCoinRef.current && !selectCoinRef.current.contains(event.target)) {
          setListVisible(false);
        }
      };
  
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);


    return (
        <div className="swap_top_menu">
            <div className="menutTItle">
                Transfer
            </div>
            <div className="swap_top_menu_right">
                <SwapContainerMenu />
            </div>
        </div>
    );
};

export default SwapTop;
