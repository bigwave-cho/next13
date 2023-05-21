'use client';
import { useEffect } from 'react';
import { age, name } from './data';
import Example from '@/components/example';

export default function Cart() {
  useEffect(() => {
    console.log(age);
    console.log(name);
  }, []);
  return (
    <div>
      <h4 className="title">Cart</h4>
      <Example />
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </div>
  );
}
