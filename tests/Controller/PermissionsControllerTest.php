<?php

namespace App\Test\Controller\Admin;

use App\Entity\Admin\Permissions;
use App\Repository\Admin\PermissionsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class PermissionsControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private PermissionsRepository $repository;
    private string $path = '/admin/rolesPerms/';
    private EntityManagerInterface $manager;

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(Permissions::class);

        foreach ($this->repository->findAll() as $object) {
            $this->manager->remove($object);
        }
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Permission index');

        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first());
    }

    public function testNew(): void
    {
        $originalNumObjectsInRepository = count($this->repository->findAll());

        $this->markTestIncomplete();
        $this->client->request('GET', sprintf('%snew', $this->path));

        self::assertResponseStatusCodeSame(200);

        $this->client->submitForm('Save', [
            'permission[name]' => 'Testing',
            'permission[shortName]' => 'Testing',
            'permission[status]' => 'Testing',
            'permission[createdBy]' => 'Testing',
            'permission[createdAt]' => 'Testing',
            'permission[updatedAt]' => 'Testing',
            'permission[DeletedAt]' => 'Testing',
        ]);

        self::assertResponseRedirects('/admin/permissions/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new Permissions();
        $fixture->setName('My Title');
        $fixture->setShortName('My Title');
        $fixture->setStatus('My Title');
        $fixture->setCreatedBy('My Title');
        $fixture->setCreatedAt('My Title');
        $fixture->setUpdatedAt('My Title');
        $fixture->setDeletedAt('My Title');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Permission');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new Permissions();
        $fixture->setName('My Title');
        $fixture->setShortName('My Title');
        $fixture->setStatus('My Title');
        $fixture->setCreatedBy('My Title');
        $fixture->setCreatedAt('My Title');
        $fixture->setUpdatedAt('My Title');
        $fixture->setDeletedAt('My Title');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'permission[name]' => 'Something New',
            'permission[shortName]' => 'Something New',
            'permission[status]' => 'Something New',
            'permission[createdBy]' => 'Something New',
            'permission[createdAt]' => 'Something New',
            'permission[updatedAt]' => 'Something New',
            'permission[DeletedAt]' => 'Something New',
        ]);

        self::assertResponseRedirects('/admin/permissions/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getName());
        self::assertSame('Something New', $fixture[0]->getShortName());
        self::assertSame('Something New', $fixture[0]->getStatus());
        self::assertSame('Something New', $fixture[0]->getCreatedBy());
        self::assertSame('Something New', $fixture[0]->getCreatedAt());
        self::assertSame('Something New', $fixture[0]->getUpdatedAt());
        self::assertSame('Something New', $fixture[0]->getDeletedAt());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new Permissions();
        $fixture->setName('My Title');
        $fixture->setShortName('My Title');
        $fixture->setStatus('My Title');
        $fixture->setCreatedBy('My Title');
        $fixture->setCreatedAt('My Title');
        $fixture->setUpdatedAt('My Title');
        $fixture->setDeletedAt('My Title');

        $this->manager->persist($fixture);
        $this->manager->flush();

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/admin/permissions/');
    }
}
