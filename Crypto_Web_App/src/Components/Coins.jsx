import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index';
import { Container, Heading, HStack, Image, VStack ,Text, Button, RadioGroup, Radio } from '@chakra-ui/react';
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent"
import CoinCard from './CoinCard';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");


  const currencySymbol = currency ==="inr"?"₹":currency==="eur"?"€":"$";

  const changePage = (page) =>{
    setPage(page);
    setloading(true);
  };

  const btns = new Array(132).fill(1);
    useEffect(() =>{
        const fetchCoins = async () =>{
          try {
            const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
            setCoins(data);
            // console.log(data);
            setloading(false);
          } catch (error) {
            setError(true);
            setloading(false);
          }
        };
        fetchCoins();
    }, [currency, page]);

    if(error) return <ErrorComponent message={"Error while Fetching Coins Data "}/>
  return (
    <Container maxW={"container.xl"} >{loading ? <Loader />: ( <>

      <RadioGroup value={currency} onChange={setCurrency} padding={8}>
        <HStack spacing={4}>
          <Radio value={'inr'}>INR ₹</Radio>
          <Radio value={'usd'}>USD $</Radio>
          <Radio value={'eur'}>EUR €</Radio>
        </HStack>
      </RadioGroup>

      <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
        {coins.map((i) =>(
          <CoinCard
            id={i.id} 
            key={i.id}
            name={i.name} 
            price={i.current_price}
            img={i.image} 
            symbol={i.symbol} 
     
            currencySymbol={currencySymbol}
          />
        ))}
      </HStack>

      <HStack w={"full"} overflowX={"auto"} padding={8}>
        {btns.map((item, index) => (
            <Button
              key={index}
              bgColor={'blackAlpha.900'}
              color={'white'}
              onClick={() => changePage(index +1)}
            >
              {index+1}
            </Button>
          ))}
      </HStack>
      </>
    )}
    </Container>
  )
}




export default Coins