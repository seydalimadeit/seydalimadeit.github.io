export interface IPage {
	statusCode: number | string;
	body: string;
}

export class AppService {
	public async getPageByRoute(params: URLSearchParams): Promise<IPage> {
		return await fetch(`${import.meta.env.PUBLIC_API_URL}/api/pages/route?${params}`).then((res) =>
			res.json()
		);
	}

	public async getPosts(): Promise<object[]> {
		return await fetch(`${import.meta.env.PUBLIC_API_URL}/api/posts`).then((res) => res.json());
	}
}
