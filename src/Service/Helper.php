<?php

namespace App\Service;

class Helper 
{
  public function RenderTemplate($data): Response 
  {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
}
