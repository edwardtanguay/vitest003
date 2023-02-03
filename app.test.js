import { test, expect } from 'vitest';
import request from 'supertest';
import app from './app.js';

// describe('GET /test', () => {
// 	describe('when passed a username and password', () => {
// 		test('should respond with a 200 status code', async () => {
// 			const response = await request(app).get('/test');
// 		expect(response.statusCode).toBe('200');
// 		})
// 	});
// });

test('GET /api/users', async () => {
	const response = await request(app).get('/test');
	expect(response.statusCode).toBe(200);
	expect(response.text).toHaveLength(10);
	expect(response.text).toBe('test works');
});
