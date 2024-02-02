import React from 'react';
import { Title } from './styles';

export function FormTitleSection({ title }: { title: string }) {

  return (
    <Title>
      {title}
    </Title>
  );

}