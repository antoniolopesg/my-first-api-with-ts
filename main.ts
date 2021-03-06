import { Server } from './server/server';
import { usersRouter } from './users/users.router'
import { restaurantsRouter } from './restaurants/restaurants.router';
import { reviewsRouter } from './reviews/reviews.router';

new Server().bootstrap([usersRouter, restaurantsRouter, reviewsRouter]).then(server => {
    console.log('Server is listening on:', server.application.address());
}).catch(err => {
    console.log('Server failed to start');
    console.error(err);
    process.exit(1);
});
