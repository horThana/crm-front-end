


import { Group, Text } from '@mantine/core';

import { TablerIcon } from '@tabler/icons-react';



interface LinksGroupProps {

  label: string;

  icon: TablerIcon;

  initiallyOpened?: boolean;

  links?: { label: string; link: string }[];

}



export function LinksGroup({ label, icon: Icon, links }: LinksGroupProps) {

  return (

    <div>

      <Group>

        <Icon />

        <Text>{label}</Text>

      </Group>

      {links && (

        <div>

          {links.map((link) => (

            <Text key={link.label}>{link.label}</Text>

          ))}

        </div>

      )}

    </div>

  );

}
