import { useState } from 'react';
import { Avatar, SegmentedControl, Text } from '@mantine/core';
import {
  IconShoppingCart,
  IconLicense,
  IconMessage2,
  IconBellRinging,
  IconMessages,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconUsers,
  IconFileAnalytics,
  IconDatabaseImport,
  IconReceipt2,
  IconReceiptRefund,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import classes from '../styles/Sidebar.module.css';
import { Link } from 'react-router-dom';

const tabs = {
  account: [
    { link: '/billing', label: 'Billing', icon: IconReceipt2 },
    { link: '/security', label: 'Subscription', icon: IconFingerprint },
    { link: '/ssh-keys', label: 'Package', icon: IconKey },
    { link: '/products', label: 'Products', icon: IconDatabaseImport },
    { link: '/error404', label: 'Notifications', icon: IconBellRinging },
    { link: '/error404', label: 'Authentication', icon: Icon2fa },
    { link: '/error404', label: 'Other Settings', icon: IconSettings },
  ],
  general: [
    { link: '/orders', label: 'Orders', icon: IconShoppingCart },
    { link: '/receipts', label: 'Receipts', icon: IconLicense },
    { link: '/reviews', label: 'Reviews', icon: IconMessage2 },
    { link: '/messages', label: 'Messages', icon: IconMessages },
    { link: '/customers', label: 'Customers', icon: IconUsers },
    { link: '/refunds', label: 'Refunds', icon: IconReceiptRefund },
    { link: '/files', label: 'Files', icon: IconFileAnalytics },
  ],
};

export function Sidebar() {
  const [section, setSection] = useState<'account' | 'general'>('account');
  const [active, setActive] = useState('Billing');

  const links = tabs[section].map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={() => setActive(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div>
        <div className='grid grid-flow-col m-4 gap-2'>
        <Text fw={500} size="sm" className="mt-2" c="dimmed" mb="xs">
         Email@gmail.com
         
        </Text>
        <Avatar className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt" />
       </div>
        
        <SegmentedControl
          value={section}
          onChange={(value: any) => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            { label: 'Account', value: 'account' },
            { label: 'System', value: 'general' },
          ]}
        />
      </div>

      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <a href="/login" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="/home" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}