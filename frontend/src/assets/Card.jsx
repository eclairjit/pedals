
import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
export const Card = ({ amount, checkoutHandler }) => {
    return (
        <VStack>
            
            <Text>₹{amount}</Text>
            <Button onClick={() => checkoutHandler(amount)}>Buy Now</Button>
        </VStack>
    )
}

