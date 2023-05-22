 
import {type GetServerSideProps} from 'next';
import {type ParsedUrlQuery} from 'querystring';
import {type PreviewData} from 'next/types';

type RedirectIfAuthenticated = <
	P extends Record<string, unknown> = Record<string, unknown>,
	Q extends ParsedUrlQuery = ParsedUrlQuery,
	D extends PreviewData = PreviewData,
>(
	gssp: GetServerSideProps<P, Q, D>
) => GetServerSideProps<P, Q, D>;

/**
 * Use with `GetServerSideProps`
 * eg:
 * ```
 * export const getServerSideProps: GetServerSideProps<Props> = redirectIfAuthenticated(async (context) => {
 *   ...
 * })
 * ```
 */
const redirectIfAuthenticated: RedirectIfAuthenticated = (gssp) => async (context) => {
	const {auth: authSession} = context.req.cookies;
	if (authSession) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return gssp(context); // Continue on to call `getServerSideProps` logic
};

export default redirectIfAuthenticated;
