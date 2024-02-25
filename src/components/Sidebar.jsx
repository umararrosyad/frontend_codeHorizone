import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div class="md:w 3/4">
      <Card className="bg-peach w-full p-4 shadow-xl shadow-blue-gray-900/5">
        <List>
          <Link href="/account">
            <ListItem className="font-bold text-lg hover:bg-grape">
              Profil Saya
            </ListItem>
          </Link>
          <Link href="/order">
            <ListItem className="font-bold text-lg hover:bg-grape">
              Pesanan Saya
            </ListItem>
          </Link>
          <Link href="/address">
            <ListItem className="font-bold text-lg hover:bg-grape">
              Alamat Pengiriman
            </ListItem>
          </Link>
          <Link href="/cart">
            <ListItem className="font-bold text-lg hover:bg-grape">
              Keranjang
            </ListItem>
          </Link>
          <Link href="/review">
            <ListItem className="font-bold text-lg hover:bg-grape">
              Ulasan
            </ListItem>
          </Link>
          <Link href="/">
            <ListItem className="font-bold text-lg hover:bg-grape">
              Keluar
            </ListItem>
          </Link>
        </List>
      </Card>
    </div>
  )
}
