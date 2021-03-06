import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { Global } from '@emotion/react'

interface Props {
  children?: React.ReactNode
  href: string
  title: string
  thumbnail: any
}

export const GridItem = ({ children, href, title, thumbnail }: Props) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box w="100%" textAlign="center">
      <NextLink href={`/projects/${id}`}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={`/projects/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
  `}
  />
)
