<?php

namespace App\Controller\Admin;

use App\Entity\Admin\Permissions;
use App\Form\Admin\PermissionsType;
use App\Repository\Admin\PermissionsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/permissions')]
class PermissionsController extends AbstractController
{
    #[Route('/', name: 'app_admin_permissions_index', methods: ['GET'])]
    public function index(PermissionsRepository $permissionsRepository): Response
    {
        return $this->render('admin/permissions/index.html.twig', [
            'permissions' => $permissionsRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_admin_permissions_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $permission = new Permissions();
        $form = $this->createForm(PermissionsType::class, $permission);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($permission);
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_permissions_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/permissions/new.html.twig', [
            'permission' => $permission,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_permissions_show', methods: ['GET'])]
    public function show(Permissions $permission): Response
    {
        return $this->render('admin/permissions/show.html.twig', [
            'permission' => $permission,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_admin_permissions_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Permissions $permission, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(PermissionsType::class, $permission);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_permissions_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/permissions/edit.html.twig', [
            'permission' => $permission,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_permissions_delete', methods: ['POST'])]
    public function delete(Request $request, Permissions $permission, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$permission->getId(), $request->request->get('_token'))) {
            $entityManager->remove($permission);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_admin_permissions_index', [], Response::HTTP_SEE_OTHER);
    }
}
