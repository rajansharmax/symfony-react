<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ExceptionController extends AbstractController
{
    #[Route('/exception/no-route', name: 'no_route_exception')]
    public function noRouteException(): Response
    {

        return $this->render('error/404.html.twig', [
            'controller_name' => 'ExceptionController',
        ]);
    }
}
