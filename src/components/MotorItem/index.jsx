import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import classNames from 'classnames/bind';
import styles from './MotorItem.module.scss';

const cx = classNames.bind(styles);

function MotorItem({ avatar, name, price }) {
    return (
        <div className={cx('wrapper')}>
            <Card>
                <HStack>
                    <CardHeader p={'6px 2px 0 10px'}>
                        <Image maxWidth={'120px'} className={cx('avatar')} src={avatar} objectFit={'cover'} alt={""} borderRadius={"lg"} />
                    </CardHeader>
                    <CardBody p={'12.5px 0'}>
                        <HStack>
                            <VStack spacing={6} className={cx('information')} align={"stretch"}>
                                <Text color='black' fontWeight={"medium"} className={cx('name')} size={"md"}>{name}</Text>
                                <Text color='blue.600' className={cx('price')} size={"md"} >{price}</Text>
                            </VStack>
                        </HStack>
                    </CardBody>
                    <CardFooter p={'12.5px 0'}>
                        <VStack spacing={14} mr={4}>
                            <Button size={'md'} className={cx('btn-buy')} variant='solid' colorScheme='blue'>
                                <Text >Buy now</Text>
                            </Button>
                            <Button size={'md'} className={cx('btn-add')} variant='ghost' colorScheme='blue'>
                                <Text >Add to cart</Text>
                            </Button>
                        </VStack>
                    </CardFooter>
                </HStack>
            </Card>
        </div>
    );
}

export default MotorItem;