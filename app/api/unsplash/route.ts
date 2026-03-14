import { NextResponse } from 'next/server';
import { createApi } from 'unsplash-js';
import { NextRequest } from 'next/server';

const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_API_KEY || '',
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const page = searchParams.get('page') || '1';
  const perPage = searchParams.get('perPage') || '30';
  
  // Check if API key is configured
  if (!process.env.UNSPLASH_API_KEY) {
    return NextResponse.json(
      { error: 'API_KEY_MISSING', message: 'Unsplash API key is not configured' },
      { status: 401 }
    );
  }
  
  try {
    let result;
    if (query) {
      result = await unsplashApi.search.getPhotos({
        query,
        page: parseInt(page),
        perPage: parseInt(perPage)
      });
    } else {
      result = await unsplashApi.photos.getRandom({
        count: parseInt(perPage)
      });
    }
    
    return NextResponse.json(result);
  } catch (error: any) {
    // Check if it's an API key error
    if (error?.status === 401 || error?.status === 403) {
      return NextResponse.json(
        { error: 'API_KEY_INVALID', message: 'Unsplash API key is invalid' },
        { status: error.status }
      );
    }
    return NextResponse.json(
      { error: 'Failed to fetch photos', details: error?.message },
      { status: 500 }
    );
  }
}