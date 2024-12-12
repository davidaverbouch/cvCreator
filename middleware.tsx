import { NextResponse } from 'next/server';

// c est executer sur toutes les pages sur toutes les requete GET, POST, DELETE, PUT
// util pour checker le tokens
const middelware = () => {
  return NextResponse.next();
};

export default middelware;
